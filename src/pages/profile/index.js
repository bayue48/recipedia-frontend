import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Edit, Image1 } from '../../assets'
import Navbar from '../../components/navbar'
import './profile.css'

export class Profile extends Component {
    render() {
        return (
            <>
             <Route exact path={this.props.match.path} component={Navbar} />
            <div className="container section-profile d-flex justify-content-center flex-column align-items-center">
                <div className="img-profile-section">
                    <img alt="" src="https://s3-alpha-sig.figma.com/img/d063/327b/4662c85cb7661f579e2c9baff0ce5fdc?Expires=1609718400&Signature=M5qACfjoeJDuvBOtvLGVoLgIA9LC-s~tm-2c3Cee9IhMMKGw0IuYa5BLg8zFyycBsSVSDw4hoFs8mHD9wfrmpIOpIjCfNs6uE9BWUNrhLL4lc9ojH60ba3mGu46whHNxCTb25mqaNjnXvEH6RdtCPWNZVQsKFPow~vc3p46WE1FPjRFr4zgXh41p6KKRe5lyBtVqkFgv5yxgahYyoGo1ZlAjO8MPNzj4aQLgrKZRJSHSLLkSrGhPJ5NIVo~UBo14w0ZOFcFFoYRq09S2hvxJjdUoCE9JotNJ7rHtXTWOfn1n8w9JTjgINDSvCPnWCbd3c0xG2GqsAk9eN5yjTeZ58Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" className="img-profile"/>
                    <Link>
                        <img alt="" src={Edit} className="edit-profile" />
                    </Link>
                </div>
                <div className="mt-4">
                    <h2>Garneta Sharina</h2>
                </div>
            </div>
            <div className="container">
                <div className="col-lg-5 d-flex justify-content-between">
                    <Link className="txt-profile text-decoration-none">My Recipe</Link>
                    <Link className="txt-profile text-decoration-none">Saved Recipe</Link>
                    <Link className="txt-profile text-decoration-none">Liked Recipe</Link>
                </div>
            </div>
            <div className="row line"></div>
            <div className="container d-flex flex-wrap  mt-4">
                <div className="col-lg-3 cold-md-6 col-sm-6 d-flex justify-content-center mt-3">
                    <div className="img-recipe-profile">
                        <img className="img-recipe" alt="" src={Image1}/>
                    </div>
                </div>
                <div className="col-lg-3 cold-md-6 col-sm-6 d-flex justify-content-center mt-3">
                    <div className="img-recipe-profile">
                        <img className="img-recipe" alt="" src={Image1}/>
                    </div>
                </div>
                <div className="col-lg-3 cold-md-6 col-sm-6 d-flex justify-content-center mt-3">
                    <div className="img-recipe-profile">
                        <img className="img-recipe" alt="" src={Image1}/>
                    </div>
                </div>
                <div className="col-lg-3 cold-md-6 col-sm-6 d-flex justify-content-center mt-3">
                    <div className="img-recipe-profile">
                        <img className="img-recipe" alt="" src={Image1}/>
                    </div>
                </div>
            </div>
            </>
        )   
    }
}

export default Profile
