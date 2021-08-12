//let nextButton = document.getElementsByName("btn-next");
window.onload = function () {
    show(0);
}
let questions = [
    {
        id: 1,
        question: "What is the full form of RAM?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Read Acess Memory",
            "Randomly Acess Memory",
            "None of the Above"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of the Above"
        ]
    },
    {
        id: 3,
        question: "Which state produces maximum soybean?",
        answer: "Madhya Pradesh",
        options: [
            "Madhya Pradesh",
            "Uttar Pradesh",
            "Bihar",
            "Rajasthan"
        ]
    },
    {
        id: 4,
        question: "Which country operationalized world’s largest radio telescope?",
        answer: "China",
        options: [
            "USA",
            "China",
            "Russia",
            "India"
        ]
    },
    {
        id: 5,
        question: "Which of the following is the capital of Arunachal Pradesh?",
        answer: "Itanagar",
        options: [
            "Itanagar",
            "Dispur",
            "Imphal",
            "Panaji"
        ]
    },
    {
        id: 6,
        question: "Katerina Sakellaropoulou was elected the first woman President of",
        answer: "Greece",
        options: [
            "Greece",
            "Spain",
            "Finland",
            "Netherland"
        ]
    },
    {
        id: 7,
        question: "Which one among the following radiations carries maximum energy?",
        answer: "Gamma rays",
        options: [
            "Ultraviolet rays",
            "Gamma rays",
            "Infra-red rays",
            "X-rays"
        ]
    },
    {
        id: 8,
        question: "What is India’s rank on EIU’s Global Democracy Index 2019?",
        answer: "51st ",
        options: [
            "48th ",
            "50th ",
            "53rd ",
            "51st "
        ]
    },
    {
        id: 9,
        question: "Which of the following states is not located in the North?",
        answer: "Jharkhand",
        options: [
            "Jharkhand",
            "Jammu and Kashmir",
            "Himachal Pradesh",
            "Haryana"
        ]
    },
    {
        id: 10,
        question: "Bokaro Steel Limited was established with the assistance of",
        answer: "Soviet Union",
        options: [
            "Germany ",
            "Soviet Union",
            "UK",
            "USA"
        ]
    },
    
]
function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
}
let question_count = 0;
let point = 0;

function next() {
    
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if (user_answer == questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points", point);
    }

    if (question_count == questions.length - 1) {

        location.href = "end.html";
        return;
    }


    question_count++;
    show(question_count);
}
function show(count) {
    let question = document.getElementById("questions");
    question.innerHTML = `<h2>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
    </ul>
    `;
    toogleActive();
}
function toogleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}