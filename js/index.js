const initializeSkills = () => {
    let skills = document.getElementsByClassName('skill');
    for (const skill of skills) {
        let percent = skill.getAttribute('data-percent')
        skill.getElementsByClassName('skillbar-progress')[0].style.width = percent + '%'
    }
}
initializeSkills();

function view_share_options() { 
    document.getElementById('share-options').classList.toggle('hide');
}

function hide_share_options() {
    document.getElementById('share-options').classList.toggle('hide');
}