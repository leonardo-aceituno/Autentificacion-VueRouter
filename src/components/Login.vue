<template>
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
            placeholder="Usuario"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formLabelAlign.password"
            placeholder="Contraseña"
            type="password"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
            >Iniciar sesión</el-button
          >
        </el-form-item>
        <!-- <a class="forgot-password" href="">Recordar contraseña ?</a> -->
        <!-- <el-button type="text" class="forgot-password" @click="notificacion"
          >Click ver contraseña</el-button
        > -->
        <el-button
          :plain="true"
          @click="openHTML"
          class="forgot-password"
          size="mini"
          >Ver contraseña</el-button
        >
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      formLabelAlign: {
        user: "",
        password: "",
      },
      rules: {
        user: [
          {
            required: true,
            message: "Este campo es requerido",
            trigger: "blur",
          },
          {
            min: 4,
            message: "Ingresar al menos 5 caracteres",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Este campo es requerido",
            trigger: "blur",
          },
          {
            min: 5,
            message: "Ingresar al menos 5 caracteres",
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
          console.log(error.code);
          // console.log("DOS", error.message);
          this.$message({
            showClose: true,
            message: "Error en Email y/o Password",
            type: "error",
          });
        });
    },
    notificacion() {
      this.$notify({
        title: "Info",
        message: `Usuario: leo@gmail.com | Contrasña : 123456`,

        type: "Info",
      });
    },
    openHTML() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message:
          " <strong>User: </strong>leo@gmail.com<br><strong>Pass: </strong>123456",
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

.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
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
  float: right;
  font-size: 12px;
}

h2 {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
  text-align: center;
}

.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 30px;
}

.login .el-input input {
  padding-left: 35px;
}

a {
  color: rgb(0, 124, 137);
  text-decoration: none;
}

a:hover {
  color: lighten(rgb(0, 124, 137), 7);
}

a:active {
  color: lighten(rgb(0, 124, 137), 7);
}

a:focus {
  color: lighten(rgb(0, 124, 137), 7);
}
</style>
