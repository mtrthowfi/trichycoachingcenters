function goToInstitutes() {
    window.location.href = "institutes.html";
}

const institutes = [
    {
        name: "Livewire Trichy",
        desc: "Industry-focused training with placement support.",
        courses: ["Python", "Java", "Cloud", "AI", "Networking"],
        address: "Sastri Road, Thillai Nagar, Trichy",
        map: "https://www.google.com/maps?q=Livewire+Trichy"
    },
    {
        name: "NIIT Trichy",
        desc: "Global certification programs in IT and Data Science.",
        courses: ["Data Science", "Full Stack", "Digital Marketing"],
        address: "Cantonment, Trichy",
        map: "https://www.google.com/maps?q=NIIT+Trichy"
    },
    {
        name: "DLK Technologies",
        desc: "Advanced real-time project-based training.",
        courses: ["Full Stack", "Mobile Apps", "Internships"],
        address: "Thiruverumbur, Trichy",
        map: "https://www.google.com/maps?q=DLK+Technologies+Trichy"
    },
    {
        name: "Softlogic Academy",
        desc: "Job-ready software and testing courses.",
        courses: ["Testing", "Java", "Web Development"],
        address: "KK Nagar, Trichy",
        map: "https://www.google.com/maps?q=Softlogic+Academy+Trichy"
    }
];

const container = document.getElementById("instituteCards");

if (container) {
    institutes.forEach((inst, index) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3 onclick="openModal(${index})" style="cursor:pointer">
                ${inst.name}
            </h3>
            <p>${inst.desc}</p>
        `;

        container.appendChild(card);
    });
}

/* MODAL FUNCTIONS */
function openModal(index) {
    const inst = institutes[index];

    document.getElementById("modalTitle").innerText = inst.name;
    document.getElementById("modalDesc").innerText = inst.desc;
    document.getElementById("modalAddress").innerText = inst.address;
    document.getElementById("mapLink").href = inst.map;

    const courseList = document.getElementById("modalCourses");
    courseList.innerHTML = "";
    inst.courses.forEach(course => {
        const li = document.createElement("li");
        li.innerText = course;
        courseList.appendChild(li);
    });

    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
