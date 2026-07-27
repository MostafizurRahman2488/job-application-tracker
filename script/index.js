let currentTab = "all";

const tabActive = [
    "btn", "btn-primary"
];

const tabInActive = [
    "btn"
];

const allContainer = document.getElementById('all-container')
const interviewContainer = document.getElementById('interview-container')
const rejectedContainer = document.getElementById('rejected-container')
// console.log(allContainer, interviewContainer, rejectedContainer);

const emptyState = document.getElementById('empty-state')


function switchTab(tab) {
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab
    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);

        if (t === tab) {
            tabName.classList.remove(...tabInActive);
            tabName.classList.add(...tabActive);
        } else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInActive);
        }
    }
    const pages = [allContainer, interviewContainer, rejectedContainer]
    for (const section of pages) {
        section.classList.add('hidden')
    }

    emptyState.classList.add('hidden')

    if (tab === "all") {
        allContainer.classList.remove("hidden")
        if (allContainer.children.length < 1) {
            emptyState.classList.remove('hidden')
        }
    }
    else if (tab === "interview") {
        interviewContainer.classList.remove('hidden')
        if (interviewContainer.children.length < 1) {
            emptyState.classList.remove('hidden')
        }
    }
    else {
        rejectedContainer.classList.remove("hidden")
        if (rejectedContainer.children.length < 1) {
            emptyState.classList.remove('hidden')
        }
    }
    updateStat()
}


// stat update 
const totalStat = document.getElementById('stat-total')
const interviewStat = document.getElementById('stat-interview')
const rejectedStat = document.getElementById('stat-rejected')
const availableStat = document.getElementById('available')
// console.log(totalStat, interviewStat, rejectedStat)

// totalStat.innerText = allContainer.children.length

switchTab(currentTab)


document.getElementById('jobs-container').addEventListener('click', function (event) {
    // console.log(event.target)
    const clickedElement = event.target
    // console.log(clickedElement.parentNode.parentNode);
    const card = clickedElement.closest(".card")
    // console.log(card)
    const parent = card.parentNode;

    const jobStatus = card.querySelector(".job-status")
    // console.log(jobStatus)


    if (clickedElement.classList.contains('interview-btn')) {
        // console.log("interview Clicked");
        jobStatus.innerText = "Interviewed"
        interviewContainer.appendChild(card)
        // updateStat()

    }
    if (clickedElement.classList.contains('reject-btn')) {
        // console.log("rejected Clicked");
        jobStatus.innerText = "Rejected"
        rejectedContainer.appendChild(card)
        // updateStat()
    }
    if (clickedElement.classList.contains('delete-btn')) {
        // console.log("delete Clicked");
        console.log(parent)
        parent.removeChild(card)
        // updateStat()

    }
    updateStat()
})

function updateStat() {
    // totalStat.innerText = allContainer.children.length
    // interviewStat.innerText = interviewContainer.children.length
    // rejectedStat.innerText = rejectedContainer.children.length

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length

    };
    totalStat.innerText = counts.all
    interviewStat.innerText = counts.interview
    rejectedStat.innerText = counts.rejected

    availableStat.innerText = counts[currentTab]
    if (counts[currentTab] < 1) {
        emptyState.classList.remove('hidden')
    }
    else {
        emptyState.classList.add('hidden')
    }
}
updateStat()