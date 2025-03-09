const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
    ],
    enrollStudent: function(sectionNum){
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        console.log(sectionIndex);
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },
    dropStudent: function(sectionNum){
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
            console.log(sectionIndex);
            if (sectionIndex >= 0) {
                this.sections[sectionIndex].enrolled--;
                renderSections(this.sections);
            }
    },
};

function renderCourseDetails(course) {
    document.querySelector('#courseName').textContent = course.name;
    document.querySelector('#courseCode').textContent = course.code;
}

function sectionTemplate(section){
    return `
    <tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>
    `;
}

function renderSections(sections){
    const html = sections.map(sectionTemplate);
    document.querySelector('#sections').innerHTML = html.join("");
}

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
}

renderCourseDetails(aCourse);
renderSections(aCourse.sections);

document.querySelector('#enrollStudent').addEventListener('click', function() {
    const sectionNum = document.querySelector('#sectionNumber').value;
    console.log(sectionNum);
    aCourse.enrollStudent(sectionNum)

});

document.querySelector('#dropStudent').addEventListener('click', function(){
});

renderSections(aCourse.sections);
renderSections(aCourse.sections);