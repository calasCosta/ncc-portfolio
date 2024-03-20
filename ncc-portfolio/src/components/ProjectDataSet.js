import tecnologies from "./Techs";

const dataSet = [
    {
        title : "Web Programming",
        description : `The main objective of this project was to develop a Full-Stack
        web solution that would allow the creation of a website with information about 
        video games and a forum on the subject.`,

        techs : [
            tecnologies.html,
            tecnologies.ejs,
            tecnologies.css,
            tecnologies.node,
            tecnologies.express,
            tecnologies.mysql
        ]
        
    },
    {
        title: "Database Complements Course",
        description: `Aims to familiarize with the administration of relational 
        databases using SQLServer, through the implementation of a new system for grouping schools named "Agrupamento STB".
        One of the measures adopted by the group is to develop a new information system that allows it to manage, in an integrated way,
        the entire process of launching grades of the different schools in the grouping, as well as allowing students and guardians to
        have access to this information.
        With the implementation of the new system, it became necessary to model and integrate, in a new Database, the pieces of information
        that were exported from existing systems and that up to now supported the various schools in the cluster. The main concepts used
        were Programming (Stored Procedures, Functions, Triggers), Metadata, Indexes, Backup and Recovery, Access levels, Encryption, and
        transaction control.`,

        techs : [
            tecnologies.msqlserver
        ]
    },
    {
        title: "Java Advanced Programming",
        description: `A logistics network consists of the location of the distribution centers and product movements between
        these centers when each route is bidirectional. This program consists of a graphical application in which the user views, manipulates, 
        and obtains diverse information about a logistics network.
        Throughout the project, the following several abstract data types were used: ArrayList, HashMap, LinkedHashMap. We also used data types
        by us implemented as following shown: Graph, GraphAdjacencyList, Vertex and Edge. Referring to Design Patterns, we used: Observer Pattern,
        Strategy Pattern, MVC Pattern. We also used refactoring techniques to avoid bad smells in the program.`,

        techs : [
            tecnologies.java
        ]
    },
    {
        title: "Mobile Computing",
        description: `This project aimed to create a mobile app to help prevent forgetting disease (Alzheimer) through a memory match game. 
        Two implementations were made for this application, Android Studio (Java) and React Native versions.`,

        techs:[
            tecnologies.androidStudio,
            tecnologies.java,
            tecnologies.javascript,
            tecnologies.reactNative,
            tecnologies.firebase
        ]
    },
    {
        title: "Web App Performance Tests",
        description: `The objective of this task was to acquire knowledge concerning the performance of automated tests of 
        web applications, through the search and implementation of solutions for several possible scenarios while using a website.`,
        techs : [
            tecnologies.java,
            tecnologies.selenium,
            tecnologies.cucumber
        ]
    },
    {
        title: "EngWithYTV (Final Bachelor Project)",
        description: `Considering the high demand for the English language, as it is a predominant language 
                    both in the labor market and in various spheres of our daily lives, and because many 
                    language students resort to YouTube videos to improve their level, this project aims 
                    to allows the user to study English (it can be extended to several languages in the future) 
                    through YouTube videos. This project is aimed at users with a beginner and intermediate 
                    level of English, for fun, it can be used by advanced users.`,
        techs : [
            tecnologies.html,
            tecnologies.css,
            tecnologies.react,
            tecnologies.node,
            tecnologies.express,
            tecnologies.mysql
        ]
    }
];

export default dataSet;