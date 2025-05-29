pipeline{
    agent{
        docker{
            image 'node:20'}
    }

    environment{
        NPM_CONFIG_CACHE = "/tmp/npm-cache"
    } 

    stages{
        stage("checkout"){
            stpes{
                checkout scm
            }
        }
        stage('build'){
            steps{
                sh '''
                    npm install
                    npm run build
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
    }  
}