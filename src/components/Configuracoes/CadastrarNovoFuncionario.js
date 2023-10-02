import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputMask from "react-input-mask";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const defaultTheme = createTheme();

export default function CadastrarNovoFuncionario() {
  const [phone, setPhone] = React.useState("");

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const [role, setRole] = React.useState("");
  const [isFreelancer, setIsFreelancer] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Sobrenome"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="birthdate"
                  label="Data de Nascimento"
                  type="date"
                  name="birthdate"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required variant="outlined">
                  <InputLabel id="role-label">Cargo</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    label="Cargo"
                  >
                    <MenuItem value={"garçom"}>Garçom</MenuItem>
                    <MenuItem value={"cozinheiro"}>Cozinheiro</MenuItem>
                    <MenuItem value={"bartender"}>Bartender</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <InputMask
                  mask="(99) 9 9999-9999"
                  value={phone}
                  onChange={handlePhoneChange}
                >
                  {() => (
                    <TextField
                      required
                      fullWidth
                      id="phone"
                      label="Número de Telefone"
                      name="phone"
                    />
                  )}
                </InputMask>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="address"
                  label="Endereço"
                  name="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="startDate"
                  label="Data de Início"
                  type="date"
                  name="startDate"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isFreelancer}
                      onChange={(e) => setIsFreelancer(e.target.checked)}
                      name="isFreelancer"
                      color="primary"
                    />
                  }
                  label="Freelancer ?"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#4b2514",
                color: "#f2e1c9",
                padding: "10px 20px",
                marginTop: "20px",
                fontSize: "1rem",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#f5f5dc",
                  color: "#4b2514",
                },
              }}
            >
              Cadatrar Novo Funcionário
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
