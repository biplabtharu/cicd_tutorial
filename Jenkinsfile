pipeline{
    agent{
        docker{
            image 'node'}
    }

    // environment{
    // } 

    stages{
        stage('build'){
            sh '''
                npm install
                npm run build
            '''
        }

        stage("markdown_test"){
            sh '''
                npm install 
                npm install markdownlint-cli2 --global
                markdownlint-cli2 -v
                markdownlint-cli2 "blog/**/*.md" "docs/**/*.md"
            '''
        }
    }  
}