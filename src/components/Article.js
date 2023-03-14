import React from "react"

const displayMinute = (minutes)=>{
    const timeIncrement = minutes < 30 ? 5 : 10
    const emoji = minutes <30 ? "☕️" : "🍱"

    let emojiString=""
    for (let i=0; i<minutes; i+= timeIncrement){
        emojiString += emoji
    }
    return emojiString
}

const Article = ({title, date="January 1, 1970", preview, minutes})=>{
    const minutesToRead = displayMinute(minutes)
    return(
       <article>
        <h3>{title}</h3>
        <small>{date} {minutesToRead} {minutes} min read</small>
        <p>{preview}</p>
       </article>
    
    )
}

export default Article

