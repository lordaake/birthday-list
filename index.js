import { profiles } from "./data.js"

const btn = document.getElementById("btn")
const profilesContainer = document.getElementById("profiles-container")

let profilesString = ""

const randomProfileIndex = Math.floor(Math.random() * profiles.length)
const randomProfile = profiles[randomProfileIndex]

btn.addEventListener("click", function () {
    const childrenArray = Array.from(profilesContainer.children)
    const shuffledChildren = childrenArray.sort(() => Math.random() - 0.5)

    profilesContainer.innerHTML = "";

    shuffledChildren.forEach((child) => {
        profilesContainer.appendChild(child)
    })

})

function generateHtml() {

    return profiles.forEach((profile) => {

        profilesString += `        
        <div class="flex flex-row items-center my-4" id="${profile.id}">
            <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img src="${profile.img}"
                    class="rounded-full overflow-hidden">
            </div>
            <div class="">
                <p>${profile.name}</p>
                <p>${profile.age} years</p>
            </div>
        </div>`

        profilesContainer.innerHTML = profilesString;
    })

}

generateHtml();