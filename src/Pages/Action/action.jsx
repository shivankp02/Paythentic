import "./Action.css";
import React from 'react'

export default function Action() {
    return (
        <div className="full">
            <h1>Hello</h1>
            <br />
            <form action="#">
                <textarea className="msg-box" name="reply" id="rep" cols="30" rows="10"></textarea>
                <br/>
                <br/>
                <input type="submit" value="send" />
            </form>
        </div>
    )
}
 