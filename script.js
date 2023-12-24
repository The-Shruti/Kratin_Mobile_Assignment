// Function to display routine for a specific time
function showRoutine(time) {
    const routineDetail = document.getElementById('routine-detail');
    
    // Clear previous routine details
    routineDetail.innerHTML = '';
    
    // Define routines for different times
    const routines = {
      'Waking': 'Waking Routine: Start your day with a glass of water and light stretching exercises.',
      '08:00 AM': 'Morning Medication: Take your prescribed morning medications with a glass of water.',
      '09:00 AM': 'Eating Habit: Have a nutritious breakfast with whole grains, fruits, and protein.',
      '11:00 AM': 'Exercise Routine: Take a 15-minute walk in your garden or a nearby park.',
      '01:00 PM': 'Eating Habit: Enjoy a balanced lunch with vegetables, lean protein, and healthy fats.',
      '03:00 PM': 'Exercise Routine: Perform chair exercises including seated leg lifts and arm circles.',
      '06:00 PM': 'Eating Habit: Have a light dinner focusing on vegetables, lean protein, and whole grains.',
      '08:00 PM': 'Evening Medication: Take your nighttime medications before bedtime.',
      'Sleep': 'Sleep Routine: Wind down with relaxation techniques and ensure a comfortable sleep environment.'
    };
    
    // Display routine for the selected time
    if (routines.hasOwnProperty(time)) {
      const routineItem = document.createElement('p');
      routineItem.textContent = routines[time];
      routineDetail.appendChild(routineItem);
    } else {
      const errorItem = document.createElement('p');
      errorItem.textContent = 'No routine available for the selected time.';
      routineDetail.appendChild(errorItem);
    }
  }
  