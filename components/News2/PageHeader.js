import React, { Component } from 'react';
import Link from 'next/link';

class PageHeader extends Component {
    render() {
        return (
            <>
                <div className="page-title-area item-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>News Right Sidebar</h2>
                                    <ul>
                                        <li>
                                            <Link legacyBehavior  href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>News Right Sidebar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PageHeader;