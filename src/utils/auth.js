const signup = (username, password) => {
    if (!username || !password) {
        return { success: false, message: "Username dan password wajib diisi" };
    }

    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    const user = userData.some((u) => u.username === username);

    if (user) {
        return { success: false, message: "Username sudah terdaftar" };
    }

    const newUser = { username, password };
    const updatedUsers = [...userData, newUser];

    localStorage.setItem("userData", JSON.stringify(updatedUsers));

    return { success: true, message: "Signup berhasil!" };
}

const login = (username, password) => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];

    const user = userData.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        return { success: true, message: "Login berhasil!" };;
    }

    return { success: false, message: "Username atau password salah" };
}

export default {
    signup,
    login
}
