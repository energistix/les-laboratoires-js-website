import React from 'react'
import TutorialList from '../components/TutorialList.js'
import LabosHeader from '../components/LabosHeader.js'
import LabosFooter from '../components/LabosFooter.js'
import IntroductionBanner from '../components/IntroductionBanner.js'
export default class Home extends React.Component {
        constructor() {
            super();
        }
        render() {
            return (
                <div style={{
                    overflow: "hidden"
                }}>

                    <link rel="stylesheet" type="text/css" href="semantic/semantic.min.css" />
                    <script
                            src="https://code.jquery.com/jquery-3.1.1.min.js"
                            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
                            crossOrigin="anonymous"></script>
                    <script src="semantic/semantic.min.js"></script>
                    <LabosHeader></LabosHeader>
                    <IntroductionBanner></IntroductionBanner>
                    <TutorialList step={4} do-auto-add={1}></TutorialList>
                    <LabosFooter></LabosFooter>
                </div>
            )
        }
    }
