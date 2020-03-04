const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingFor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
        name: 'Will Johnson',
        age: 38,
        gender: 'male',
        lookingFor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/17.jpg'
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile != undefined)
    {
        document.getElementById('profile-display').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li> 
                <li class="list-group-item">Age: ${currentProfile.age}</li> 
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>  
            </ul>
        `;
        document.getElementById('img-display').innerHTML = `
            <img src="${currentProfile.image}"><?img>
        `;
    } else {
        // No more profiles
        window.location.reload();
    }
}

// Profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false} :
            { done: true }
        }
    };
}