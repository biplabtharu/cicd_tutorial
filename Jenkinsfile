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
            steps{
                checkout scm
            }
        }

        stage('build'){
            steps{
                // catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {       
                //     sh "npm install"
                //     sh "npm run build"
                // }
                try{
                    sh "npm install"
                    sh "npm run build"
                }catch(err){
                    echo "Error: ${err}"
                }
                
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