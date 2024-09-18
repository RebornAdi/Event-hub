document.addEventListener('DOMContentLoaded', function() {
    //made by Adi
    // Example event data
    const events = [
        { name: 'Tech Talk', date: '2024-08-01' },
        { name: 'Coding Workshop', date: '2024-08-10' },
    ];

    // Display events
    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.name} - ${event.date}`;
        eventList.appendChild(listItem);
    });

    // Follow button functionality
    const followButton = document.getElementById('follow-button');
    followButton.addEventListener('click', () => {
        alert('You are now following the club!');
    });
});
