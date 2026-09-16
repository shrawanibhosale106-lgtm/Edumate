// EduMate 3rd Semester Curriculum Data Structure

const syllabusData = {
    "HCON": {
        subjectCode: "ITH302",
        subjectName: "Computer Network (HCON)",
        credits: 3,
        units: [
            {
                unitId: "U1",
                unitName: "Unit 1: Fundamentals of Data Communication and Computer Network",
                topics: [
                    {
                        topicId: "T1_1",
                        topicName: "Process of Data Communication",
                        subtopics: ["Transmitter & Receiver Roles", "Transmission Mediums", "Message & Protocols"]
                    },
                    {
                        topicId: "T1_2",
                        topicName: "Protocols and Data Metrics",
                        subtopics: ["Standards Organizations", "Bandwidth & Data Rate", "Baud Rate Calculation"]
                    },
                    {
                        topicId: "T1_3",
                        topicName: "Communication Modes & Signals",
                        subtopics: ["Simplex, Half & Full Duplex", "Analog Signals", "Digital Signals"]
                    },
                    {
                        topicId: "T1_4",
                        topicName: "Network Architecture & Services",
                        subtopics: ["Active vs Passive Networks", "Client-Server Architecture", "Peer-to-Peer Networks"]
                    }
                ]
            },
            {
                unitId: "U2",
                unitName: "Unit 2: Line Configuration, Topology, Transmission Media",
                topics: [
                    {
                        topicId: "T2_1",
                        topicName: "Line Configuration & Topologies",
                        subtopics: ["Point to Point & Multi-point", "Star, Bus & Ring Topologies", "Mesh & Hybrid Topologies"]
                    },
                    {
                        topicId: "T2_2",
                        topicName: "Network Categories & Media",
                        subtopics: ["LAN, MAN, and WAN Criteria", "Guided Transmission Media", "Unguided Transmission Media"]
                    }
                ]
            },
            {
                unitId: "U3",
                unitName: "Unit 3: Network Layers, Devices & Functions",
                topics: [
                    {
                        topicId: "T3_1",
                        topicName: "Reference Models & Hardware",
                        subtopics: ["OSI 7-Layer Model", "TCP/IP Suite", "Hubs, Switches & Routers", "Bridges & Gateways"]
                    },
                    {
                        topicId: "T3_2",
                        topicName: "IP Addressing",
                        subtopics: ["Classful IP Addressing", "Static IP Configuration", "Dynamic IP Configuration"]
                    }
                ]
            },
            {
                unitId: "U4",
                unitName: "Unit 4: Transmission Errors & IEEE Standards",
                topics: [
                    {
                        topicId: "T4_1",
                        topicName: "Error Control & IEEE",
                        subtopics: ["Error Detection Techniques", "Error Correction Methods", "IEEE Standards Overview"]
                    }
                ]
            },
            {
                unitId: "U5",
                unitName: "Unit 5: TCP/IP Protocol & Utility Commands",
                topics: [
                    {
                        topicId: "T5_1",
                        topicName: "Core Protocols & Network Diagnostics",
                        subtopics: ["TCP vs UDP Protocols", "IP & ICMP Functions", "Commands: ipconfig, ping, tracert", "Commands: netstat, pathping, route"]
                    }
                ]
            },
            {
                unitId: "U6",
                unitName: "Unit 6: Application Layer Protocols",
                topics: [
                    {
                        topicId: "T6_1",
                        topicName: "Application Protocols & Sniffing",
                        subtopics: ["Remote Logging (Telnet)", "Email Protocols (SMTP, POP)", "FTP Operation", "Wireshark Packet Sniffing", "TCP/UDP Client-Server Program"]
                    }
                ]
            }
        ]
    },

    "HOOP": {
        subjectCode: "ITH303",
        subjectName: "Object Oriented Programming Using C++ (HOOP)",
        credits: 5,
        units: [
            {
                unitId: "U1",
                unitName: "Unit 1: Principles of OOP (12 Marks)",
                topics: [
                    {
                        topicId: "T1_1",
                        topicName: "OOP Fundamentals",
                        subtopics: ["POP vs OOP Comparison", "Key Features of OOP", "Structure of C++ Program"]
                    },
                    {
                        topicId: "T1_2",
                        topicName: "Variables & Operators",
                        subtopics: ["Data Types & Type Compatibility", "Reference Variables & Dynamic Init", "Scope Resolution & Memory Operators"]
                    }
                ]
            },
            {
                unitId: "U2",
                unitName: "Unit 2: Classes and Objects (12 Marks)",
                topics: [
                    {
                        topicId: "T2_1",
                        topicName: "Classes & Member Functions",
                        subtopics: ["Class Specification & Objects", "Access Specifiers", "Inside/Outside Member Functions"]
                    },
                    {
                        topicId: "T2_2",
                        topicName: "Advanced Class Concepts",
                        subtopics: ["Inline & Static Members", "Friend Functions", "Array of Objects"]
                    }
                ]
            },
            {
                unitId: "U3",
                unitName: "Unit 3: Constructors and Destructors (10 Marks)",
                topics: [
                    {
                        topicId: "T3_1",
                        topicName: "Object Lifecycle Management",
                        subtopics: ["Types of Constructors", "Constructor Overloading", "Copy Constructor & Destructors"]
                    }
                ]
            },
            {
                unitId: "U4",
                unitName: "Unit 4: Inheritance (12 Marks)",
                topics: [
                    {
                        topicId: "T4_1",
                        topicName: "Inheritance Types & Virtual Classes",
                        subtopics: ["Single, Multiple & Multilevel Types", "Virtual Base Class", "Abstract Classes"]
                    }
                ]
            },
            {
                unitId: "U5",
                unitName: "Unit 5: Pointers and Polymorphism (14 Marks)",
                topics: [
                    {
                        topicId: "T5_1",
                        topicName: "Pointers & Virtual Functions",
                        subtopics: ["Pointers to Objects & 'this' Pointer", "Virtual & Pure Virtual Functions"]
                    },
                    {
                        topicId: "T5_2",
                        topicName: "Polymorphism Types",
                        subtopics: ["Function Overloading", "Operator Overloading"]
                    }
                ]
            },
            {
                unitId: "U6",
                unitName: "Unit 6: File Operations (10 Marks)",
                topics: [
                    {
                        topicId: "T6_1",
                        topicName: "File Handling",
                        subtopics: ["Stream Classes", "Modes & File Pointers", "Sequential vs Random Access"]
                    }
                ]
            }
        ]
    },

    "HDBS": {
        subjectCode: "ITH304",
        subjectName: "Database Management System (HDBS)",
        credits: 5,
        units: [
            {
                unitId: "U1",
                unitName: "Unit 1: Introduction to DBMS (10 Marks)",
                topics: [
                    {
                        topicId: "T1_1",
                        topicName: "DBMS Concepts & ER Modeling",
                        subtopics: ["DBMS vs File System", "Instances & Schemas", "ER Model & Relational Model", "Mapping Cardinalities"]
                    }
                ]
            },
            {
                unitId: "U2",
                unitName: "Unit 2: Relational Model (12 Marks)",
                topics: [
                    {
                        topicId: "T2_1",
                        topicName: "Relational Concepts",
                        subtopics: ["Relational Database Structure", "Relational Algebra Operations", "Codd's 12 Rules"]
                    }
                ]
            },
            {
                unitId: "U3",
                unitName: "Unit 3: Structured Query Language (SQL) (12 Marks)",
                topics: [
                    {
                        topicId: "T3_1",
                        topicName: "SQL Commands & Constraints",
                        subtopics: ["DDL & DML Commands", "Integrity Constraints (PK, FK, NULL)", "Built-in SQL Functions"]
                    },
                    {
                        topicId: "T3_2",
                        topicName: "Advanced SQL Queries",
                        subtopics: ["Joins & Subqueries", "Views, Indexes, and Sequences"]
                    }
                ]
            },
            {
                unitId: "U4",
                unitName: "Unit 4: Normalization (10 Marks)",
                topics: [
                    {
                        topicId: "T4_1",
                        topicName: "Database Normalization",
                        subtopics: ["Functional Dependencies", "1NF, 2NF, 3NF Forms", "Boyce-Codd Normal Form (BCNF)"]
                    }
                ]
            },
            {
                unitId: "U5",
                unitName: "Unit 5: PL/SQL (14 Marks)",
                topics: [
                    {
                        topicId: "T5_1",
                        topicName: "Procedural SQL Constructs",
                        subtopics: ["PL/SQL Block Structure", "Cursors & Control Statements", "Procedures, Functions & Triggers"]
                    }
                ]
            },
            {
                unitId: "U6",
                unitName: "Unit 6: Security and Transactions (12 Marks)",
                topics: [
                    {
                        topicId: "T6_1",
                        topicName: "Control & Security",
                        subtopics: ["DCL Commands (Grant/Revoke)", "ACID Properties & Transactions", "Concurrency & Recovery"]
                    }
                ]
            }
        ]
    },

    "HDLD": {
        subjectCode: "ITH305",
        subjectName: "Digital Logic & Microprocessor (HDLD)",
        credits: 3,
        units: [
            {
                unitId: "U1",
                unitName: "Unit 1: Number Systems and Logic Gates (12 Marks)",
                topics: [
                    {
                        topicId: "T1_1",
                        topicName: "Number Systems & Codes",
                        subtopics: ["Binary, Octal, Hex Systems", "ASCII, Gray, BCD, Excess-3 Codes", "1's & 2's Complement Arithmetic"]
                    },
                    {
                        topicId: "T1_2",
                        topicName: "Logic Gates",
                        subtopics: ["Basic & Derived Gates", "Universal Gates (NAND/NOR Logic)"]
                    }
                ]
            },
            {
                unitId: "U2",
                unitName: "Unit 2: Combinational Logic Circuits (12 Marks)",
                topics: [
                    {
                        topicId: "T2_1",
                        topicName: "Boolean Optimization",
                        subtopics: ["De Morgan's Theorems & SOP/POS", "K-Map Minimization (2,3,4 Variables)"]
                    },
                    {
                        topicId: "T2_2",
                        topicName: "Logic Circuits",
                        subtopics: ["Half & Full Adders/Subtractors", "Multiplexers & Demultiplexers"]
                    }
                ]
            },
            {
                unitId: "U3",
                unitName: "Unit 3: Sequential Logic Circuits (10 Marks)",
                topics: [
                    {
                        topicId: "T3_1",
                        topicName: "Flip-Flops & Registers",
                        subtopics: ["SR, JK, D, T Flip-Flops", "Shift Registers (SISO, SIPO, PISO, PIPO)", "Asynchronous Counters"]
                    }
                ]
            },
            {
                unitId: "U4",
                unitName: "Unit 4: Architecture of 8086 Microprocessor (18 Marks)",
                topics: [
                    {
                        topicId: "T4_1",
                        topicName: "8086 Hardware Architecture",
                        subtopics: ["General & Segment Registers", "Flag Register & Pin Diagram", "Memory Segmentation Concepts"]
                    }
                ]
            },
            {
                unitId: "U5",
                unitName: "Unit 5: Assembly Language Programming of 8086 (18 Marks)",
                topics: [
                    {
                        topicId: "T5_1",
                        topicName: "8086 ALP",
                        subtopics: ["Instruction Set & Addressing Modes", "Arithmetic Assembly Programs", "Fibonacci, Factorial & Calculator Logic"]
                    }
                ]
            }
        ]
    },

    "HCLS": {
        subjectCode: "ITH306",
        subjectName: "Client Side Scripting (HCLS)",
        credits: 3,
        units: [
            {
                unitId: "U1",
                unitName: "Unit 1: Introduction to JavaScript",
                topics: [
                    {
                        topicId: "T1_1",
                        topicName: "JavaScript Fundamentals",
                        subtopics: ["Client-Side vs Server-Side Execution", "Variables, Data Types & Operators", "Control Flow & Loop Constructs"]
                    }
                ]
            },
            {
                unitId: "U2",
                unitName: "Unit 2: Array, Functions and String",
                topics: [
                    {
                        topicId: "T2_1",
                        topicName: "Data Structures & Functions",
                        subtopics: ["Arrays & Associative Arrays", "Function Declaration & Scope", "String Manipulation Methods"]
                    }
                ]
            },
            {
                unitId: "U3",
                unitName: "Unit 3: Form & Event Handling",
                topics: [
                    {
                        topicId: "T3_1",
                        topicName: "Event Driven Programming",
                        subtopics: ["Form Element Manipulation", "Mouse, Keyboard & Form Events"]
                    }
                ]
            },
            {
                unitId: "U4",
                unitName: "Unit 4: Cookies, Regular Expression, Validation",
                topics: [
                    {
                        topicId: "T4_1",
                        topicName: "Validation & Sessions",
                        subtopics: ["Cookie & Session Management", "Form Validation with RegEx"]
                    }
                ]
            },
            {
                unitId: "U5",
                unitName: "Unit 5: Object and DOM",
                topics: [
                    {
                        topicId: "T5_1",
                        topicName: "DOM Manipulation",
                        subtopics: ["JS Core Objects", "Document Object Model Manipulation"]
                    }
                ]
            },
            {
                unitId: "U6",
                unitName: "Unit 6: Advanced JavaScript Frameworks",
                topics: [
                    {
                        topicId: "T6_1",
                        topicName: "Modern Extensions",
                        subtopics: ["Node.js Basics", "JSON Data Format", "AngularJS Overview"]
                    }
                ]
            }
        ]
    },

    "HEIC": {
        subjectCode: "CCH205",
        subjectName: "Essence of Indian Constitution (HEIC)",
        credits: 1,
        units: [
            {
                unitId: "U1",
                unitName: "Unit 1: Indian Constitution Framework",
                topics: [
                    {
                        topicId: "T1_1",
                        topicName: "Constitutional Principles",
                        subtopics: ["Preamble & Fundamental Rights", "Fundamental Duties & Directive Principles", "Central & State Government Structure"]
                    }
                ]
            }
        ]
    }
};

// Export structure for modular or browser script environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = syllabusData;
}