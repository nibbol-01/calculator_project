let data = [];
const renderTable = () => {
    let tbody = '';
    data.map((item, index) => {
        tbody +=`
            <tr class="table-danger">
                <td>${item.id}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
                <td>${item.password}</td>
                <td><img src=${item.profile} width="50" /></td>
                <td>
                    <button class="btn btn-warning" onclick="update(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="fa-solid fa-pen-to-square me-2"></i>Edit
                    </button>
                    <button class="btn btn-danger" onclick="deleteUser($(index))">
                        <i class="fa-solid fa-trash me-2"></i>Remove
                    </button>
                </td>
            </tr>
        `;
    });
    document.querySelector('tbody').innerHTML = tbody;
};
let editIndex = -1;
const addData = () => {
    const inputID = document.getElementById('id');
    const inputUsername = document.getElementById('username');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    const inputProfile = document.getElementById('profile');
    const render = new FileReader();
    render.onload = () => {
        const users = {
            id: inputID.value,
            username: inputUsername.value,
            email: inputEmail.value,
            password: inputPassword.value,
            profile: render.result
        };
        if(editIndex === -1){
            data.push(users);
        }else{
            data[editIndex] = users
            editIndex = -1;
        }
        renderTable();
        clear();
        }
    if (inputProfile.files[0]) {
        render.readAsDataURL(inputProfile.files[0]);
    } else {
        alert('Please Choose Image');
    }
}
const update = (index) => {
    editIndex = index
    const user = data[index];
    document.getElementById('id').value = user.id;
    document.getElementById('username').value = user.username;
    document.getElementById('email').value = user.email;
    document.getElementById('password').value = user.password;
    // alert(index);
}
const clear = () => {
    document.getElementById('id').value = '';
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('profile').value = '';
}