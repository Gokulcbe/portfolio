import htmlImage from '@/assets/skills/html.png'
import cssImage from '@/assets/skills/css.png'
import jsImage from '@/assets/skills/js.png'
import javaImage from '@/assets/skills/java.png'
import vuejsImage from '@/assets/skills/vuejs.png'
import springImage from '@/assets/skills/spring.png'
import nodeImage from '@/assets/skills/node.png'
import reactImage from '@/assets/skills/react.webp'
import restapiImage from '@/assets/skills/restapi.png'
import mongodbImage from '@/assets/skills/mongodb.png'
import mysqlImage from '@/assets/skills/mysql.svg'
import postgresqlImage from '@/assets/skills/postgresql.png'
import gitImage from '@/assets/skills/git.png'
import firebaseImage from '@/assets/skills/firebase.png'
import awsImage from '@/assets/skills/aws.png'

export default {
    data() {
        return {
            skills: [
                { name: 'HTML', img: htmlImage },
                { name: 'CSS', img: cssImage },
                { name: 'Javascript', img: jsImage },
                { name: 'Java', img: javaImage },
                { name: 'VueJs', img: vuejsImage },
                { name: 'Spring Boot', img: springImage },
                { name: 'Node JS', img: nodeImage },
                { name: 'React JS', img: reactImage },
                { name: 'Rest API', img: restapiImage },
                { name: 'MongoDB', img: mongodbImage },
                { name: 'MySQL', img: mysqlImage },
                { name: 'PostgreSQL', img: postgresqlImage },
                { name: 'Git/Github', img: gitImage },
                { name: 'Google Firebase', img: firebaseImage },
                { name: 'AWS Cloud', img: awsImage }
            ]
        }
    },
}