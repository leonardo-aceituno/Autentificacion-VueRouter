<template>
  <!-- <div class="contenedor">
    <div class="login">
      <div class="login-screen">
        <div class="app-title">
          <el-avatar :size="80" :src="circleUrl"></el-avatar>
          <h1>Login</h1>
        </div>

        <div class="login-form">
          <div class="control-group">
            <el-input
              v-model="formLabelAlign.user"
              placeholder="leo@gmail.com"
            ></el-input>
          </div>

          <div class="control-group">
            <el-input
              v-model="formLabelAlign.password"
              placeholder="123456"
              show-password
            ></el-input>
          </div>

          <el-button type="primary" class="btn" @click="login"
            >Ingresar</el-button
          >
        </div>
      </div>
    </div>
  </div> -->

  <div class="login">
    <el-card>
      <h2>Login</h2>
      <el-form
        class="login-form"
        :model="formLabelAlign"
        :rules="rules"
        ref="form"
        @submit.native.prevent="login"
      >
        <el-form-item prop="user">
          <el-input
            v-model="formLabelAlign.user"
            placeholder="Username"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formLabelAlign.password"
            placeholder="Password"
            type="password"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
            >Login</el-button
          >
        </el-form-item>
        <a class="forgot-password" href="">Forgot password ?</a>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        user: "",
        password: "",
      },
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      rules: {
        user: [
          {
            required: true,
            message: "Username is required",
            trigger: "blur",
          },
          {
            min: 4,
            message: "Username length should be at least 5 characters",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    login() {
      const auth = getAuth();
      const {
        formLabelAlign: { user: email, password },
      } = this;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log("UNO", error.code);
          // console.log("DOS", error.message);

          this.$message({
            showClose: true,
            message: "Error en Email y/o Password",
            type: "error",
          });
        });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

*:focus {
  outline: none;
}
/* .contenedor {
  font-family: Arial;
  background-color: #3498db;
  padding: 100px;
  height: 100vh;
}
.login {
  margin: 20px auto;
  width: 300px;
}
.login-screen {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.app-title {
  text-align: center;
  color: #777;
  padding-bottom: 20px;
}

.login-form {
  text-align: center;
}
.control-group {
  margin-bottom: 10px;
}

el-input {
  text-align: center;
  background-color: #ecf0f1;
  border: 2px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 200;
  padding: 10px 0;
  width: 250px;
  transition: border 0.5s;
}

el-input:focus {
  border: 2px solid #3498db;
  box-shadow: none;
}

.btn {
  border: px solid transparent;
  background: #3498db;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;

  border-radius: 5px;
  box-shadow: none;
  transition: 0.25s;
  display: block;
  width: 260px;
  margin: 0 auto;
}

.btn:hover {
  background-color: #2980b9;
} */

/* .login-link {
  font-size: 12px;
  color: #444;
  display: block;
  margin-top: 12px;
} */

.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
}
</style>
