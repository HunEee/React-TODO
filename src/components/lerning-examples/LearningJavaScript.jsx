const person = {
    name:'Jihun kim',
    address: {
        line1: '서울 도봉구',
        city: '창동',
        country: 'korea'
    },
    profiles:['twitter','instagram','사람인'],
    printProfile: () => {
        person.profiles.map(
            profile=>console.log(profile)
        )
    }

}

// function printProfile(){
//     console.log(person.profile[0])
// }

export default function LearningJavaScript(){
    return(
        <div>
            <div>{person.name}</div>
            <div>{person.address.city}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </div>
    )
}