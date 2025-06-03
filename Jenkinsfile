pipeline{
    agent{
        docker {
            image 'node:slim'
            label 'vagrant-node'
            // args '-v $HOME:.m2:/root/.m2'
        }
    }

    // agent{
    //     dockerfile true
    // }

    // environment{
    //     // NPM_CONFIG_CACHE = "/tmp/npm-cache"
    //     USERNAME = credentials('username')
    // } 
    
    stages{
        // stage("checkout"){
        //     steps{
        //         checkout scm
        //     }
        // }

        stage('build'){
            steps{
            //     catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {       
            //         sh "npm install"
            //         sh "npm run build"
            //     }
                sh '''
                    node -v
                    echo "User: $(whoami)"
                    echo "HOME: $HOME"
                    echo "npm cache location: $(npm config get cache)"
                    npm install
                '''
            }
        }

        // stage("markdown_test"){
        //     steps{
        //         catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
        //             sh '''
        //                 npm install 
        //                 npm install markdownlint-cli2 --global
        //                 markdownlint-cli2 -v
        //                 markdownlint-cli2 "blog/**/*.md" "docs/**/*.md"
        //             '''
        //             }
        //     }
        // }

        // stage("html_lint_test"){
        //     steps{
        //        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
        //             sh '''
        //                 npm install --save-dev htmlhint
        //                 npx htmlhint --version
        //             '''
        //             }
        //                 // npx htmlhint build/
        //     }
        // }
    }  
}