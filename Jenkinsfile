pipeline {
    agent any

    stages {
        stage('Analizar con SonarQube') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    bat 'sonar-scanner.bat'
                }
            }
        }

        stage('Enviar notificación análisis exitoso') {
            steps {
                mail to: 'marycortes7766@gmail.com',
                     subject: "✅ Análisis exitoso - Foodhut",
                     body: "El análisis con SonarQube ha finalizado correctamente."
            }
        }

stage('Empaquetar proyecto') {
    steps {
        bat '''
            if not exist "C:\\Users\\Harold\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\foodhut_master\\build" mkdir "C:\\Users\\Harold\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\foodhut_master\\build"
            powershell -Command "Compress-Archive -Path 'C:\\Users\\Harold\\Downloads\\foodhut-master\\*' -DestinationPath 'C:\\Users\\Harold\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\foodhut_master\\build\\foodhut.war'"
        '''
        echo '✅ Proyecto empaquetado correctamente.'
    }
}

        stage('Notificar empaquetado') {
            steps {
                mail to: 'marycortes7766@gmail.com',
                     subject: "📦 Proyecto empaquetado - Foodhut",
                     body: "El proyecto fue empaquetado exitosamente como WAR. Ruta: ${env.WORKSPACE}\\build\\foodhut.war"
            }
        }

        stage('Desplegar en Tomcat') {
            steps {
                bat """
                    copy /Y "${env.WORKSPACE}\\build\\foodhut.war" "C:\\ruta\\a\\tomcat\\webapps\\foodhut.war"
                """
                echo 'Despliegue realizado correctamente en Tomcat.'
            }
        }

        stage('Notificar despliegue') {
            steps {
                mail to: 'marycortes7766@gmail.com',
                     subject: "🚀 Proyecto desplegado - Foodhut",
                     body: "El archivo WAR fue desplegado correctamente en Tomcat."
            }
        }
    }

    post {
        failure {
            mail to: 'marycortes7766@gmail.com',
                 subject: "❌ Falló el pipeline - Foodhut",
                 body: "Revisa Jenkins para más detalles del error."
        }
    }
}
