import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/91697330_2528324834085836_4598853820083077120_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_7DvQlw-S6wAX_uJoFA&_nc_ht=scontent.fsgn15-1.fna&oh=00_AfBvUpqwwG_HKz9kwjfpCOqDcXOkDlHsgonpco08te141Q&oe=648ED07C" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header