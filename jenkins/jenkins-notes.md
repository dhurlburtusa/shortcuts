# Jenkins Notes

Jenkins is a self-contained, open source automation server which can be used to
automate all sorts of tasks related to building, testing, and delivering or
deploying software.

Jenkins can be installed through native system packages, Docker, or even run
standalone by any machine with a Java Runtime Environment (JRE) installed.


## Installing

See https://jenkins.io/doc/book/installing/ for details.


## Continuous Integration/Continuous Delivery

Jenkins can be used for providing CI/CD.

Use a pipeline.

**Pipeline Script Example**

```groovy
pipeline {
  agent any
  parameters {
    string(
      name: 'Greeting',
      defaultValue: 'Hello',
      description: 'How should I greet the world?'
    )
  }
  stages {
    stage('Greet') {
      steps {
        sh 'echo "Greet Stage started ..."'
        sh 'echo "  Step 1 ..."'
        echo "${params.Greeting} World!"
        sh 'echo "  Step 1 finished."'
        sh 'echo "Greet Stage finished."'
      }
    }
    stage('GreetAgain') {
      steps {
        sh 'echo "GreetAgain Stage started ..."'
        sh 'echo "  Step 1 ..."'
        echo "${params.Greeting} World!"
        sh 'echo "  Step 1 finished."'
        sh 'echo "GreetAgain Stage finished."'
      }
    }
  }
}
```
