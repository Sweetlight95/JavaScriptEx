let role = 'guest';

switch (role) {
    case 'guest': 
        console.log('guest user');
    
    case 'moderator': 
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
        break;
}

if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User')