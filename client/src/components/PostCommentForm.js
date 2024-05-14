import React, {useState} from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function PostCommentForm({onAddComment, postId, onChangeIsComFormVis, user}){
    const [error, setError] = useState(null);

    const formSchema = yup.object().shape({
        comment: yup.string().required("Must enter a comment"),
      })

    const formik = useFormik({
        initialValues: {
          comment:'',
          date_added: `${new Date().toLocaleDateString('en-US')} ${new Date().toLocaleTimeString('en-US')}`,
          post_id: parseInt(postId),
          user_id: user.id,
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
          fetch("/post_comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }).then((res) => {
            if(res.ok) {
              res.json().then(newComment => {
                onAddComment(newComment)
                formik.resetForm()
              })
            } else {
                res.json().then(error => setError(error.message))
            }
          })
        },
      })

    return (
        <div className="ui text container">
        <form className="ui form" onSubmit={formik.handleSubmit}>  
            <div className="field">
            <label>Add Comment<a style={{float: "right"}} onClick={onChangeIsComFormVis}>Hide</a></label>
                <textarea rows="2" type="text" id="comment" name="comment" value={formik.values.comment} placeholder="Your comment here" onChange={formik.handleChange}></textarea>               
                {formik.errors && <p style={{color:'red', textAlign:'center'}}>{formik.errors.comment}</p>}
            </div>
            <div className="field">
                <button className="ui circular button fluid small teal" type="submit">Submit</button>
            </div>
        </form>
         
         </div>
    )
}

export default PostCommentForm