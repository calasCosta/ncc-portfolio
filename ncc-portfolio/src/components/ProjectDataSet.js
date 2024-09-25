import tecnologies from "./Techs";

const dataSet = [
    {
        title : "Web Programming",
        description : `Development of a Full-Stack
        web solution that allows the creation of a website with information about 
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
        description: `Implementation of a new system of Polytechnic High School SOS - Bissau/Guinea-Bissau 
                    that allows guardians to control their children’s academic activities, in which it was 
                    necessary to model and integrate, in a new Database, the fragments of information 
                    exported from a poorly modelled database.`,

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
        description: `Creation of a mobile app to help prevent forgetting disease (Alzheimer) through a memory match game. 
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
        description: `Capgemini’s project aimed at the performance of automated tests of web applications, 
                    through the search and implementation of solutions for several possible scenarios while using a website.`,
        techs : [
            tecnologies.java,
            tecnologies.selenium,
            tecnologies.cucumber
        ]
    },
    {
        title: "EngWithYTV (Final Bachelor Project)",
        description: `A Full-stack web application that helps users improve their English through YouTube videos. 
                    This app allows users to watch YouTube videos, see their transcript, click on a word/expression 
                    and see its meaning and add it to a recognition level (known, to know, unknown), move word/expression 
                    between recognition levels, debate about a video with embed ChatGPT API, see the expression of the day, 
                    connect and chat with other users.`,
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