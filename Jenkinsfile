pipeline{
    agent{
        docker{
            image 'node'}
    }

    environment{
        NPM_CONFIG_CACHE = "/tmp/npm-cache"
    } 

    stages{
        stage('build'){
            steps{
                sh '''
                    npm install
                    npm run build
                '''
            }
        }

        stage("markdown_test"){
            steps{
                sh '''
                    npm install 
                    npm install markdownlint-cli2 --global
                    markdownlint-cli2 -v
                    markdownlint-cli2 "blog/**/*.md" "docs/**/*.md"
                '''
            }
        }
    }  
}