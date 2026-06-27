const password = document.getElementById("password");

password.addEventListener("keyup", checkPassword);

function checkPassword() {
    let value = password.value;
    let strength = 0;

    // 1. Check Length
    if (value.length >= 8) {
        document.getElementById("length").innerHTML = "✅ Minimum 8 Characters";
        strength++;
    } else {
        document.getElementById("length").innerHTML = "❌ Minimum 8 Characters";
    }

    // 2. Check Uppercase
    if (/[A-Z]/.test(value)) {
        document.getElementById("upper").innerHTML = "✅ Uppercase Letter";
        strength++;
    } else {
        document.getElementById("upper").innerHTML = "❌ Uppercase Letter";
    }

    // 3. Check Lowercase
    if (/[a-z]/.test(value)) {
        document.getElementById("lower").innerHTML = "✅ Lowercase Letter";
        strength++;
    } else {
        document.getElementById("lower").innerHTML = "❌ Lowercase Letter";
    }

    // 4. Check Numbers
    if (/[0-9]/.test(value)) {
        document.getElementById("number").innerHTML = "✅ Number";
        strength++;
    } else {
        document.getElementById("number").innerHTML = "❌ Number";
    }

    // 5. Check Special Characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        document.getElementById("special").innerHTML = "✅ Special Character";
        strength++;
    } else {
        document.getElementById("special").innerHTML = "❌ Special Character";
    }

    // Update UI Progress Bar and text feedback
    let bar = document.getElementById("bar");
    let result = document.getElementById("result");

    switch (strength) {
        case 0:
        case 1:
            bar.style.width = "20%";
            bar.style.background = "red";
            result.innerHTML = "Weak Password";
            break;
        case 2:
        case 3:
            bar.style.width = "60%";
            bar.style.background = "orange";
            result.innerHTML = "Medium Password";
            break;
        case 4:
            bar.style.width = "80%";
            bar.style.background = "yellow";
            result.innerHTML = "Good Password";
            break;
        case 5:
            bar.style.width = "100%";
            bar.style.background = "lime";
            result.innerHTML = "Strong Password";
            break;
    }
}