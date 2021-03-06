# Tutorial de instalare

### Clonarea repositoryului

Copiaza linkul repositoryului si cloneaza-l:

```
git clone https://github.com/Vyctor661/king-typer.git
```

### Instalarea dependencyurilor.

Am folosit pnpm pentru a-mi gestiona toate dependencyurile. În folderul root rulați această comandă pentru a instala toate dependencyurile (Aveti nevoie de pnpm instalat):

```
pnpm i
```

### Ruleaza comanda dev.

Ruleaza codul in dev mode in orice mod doresti:

1. Ruleaza API-ul si SPA-ul in acelasi timp.

API-ul este pe localhost:8090 (rețineți că API-ul nu este nici pe aproape de a fi început și nu este încă utilizat, va fi destinat gestionarii conturilor, testele multiplayer, o bază de date și alte lucruri de genul acesta)

SPA este in localhost:8080

```
pnpm run dev 
```

2. Ruleaza numai SPA-ul
```
cd packages
cd web
pnpm run dev
```
Dupa poti sa deschizi localhost:8080 in browser

3. Ruleaza numai API-ul
```
cd packages
cd api
pnpm run dev
```
Dupa poti sa deschizi localhost:8080 in browser

### Alte scripturi

Restul scripturilor poate fi gasit in: [Root folder](https://github.com/Vyctor661/king-typer/blob/master/package.json), [SPA Folder](https://github.com/Vyctor661/king-typer/blob/master/packages/web/package.json), [API Folder](https://github.com/Vyctor661/king-typer/blob/master/packages/api/package.json)

- `build`: Un script pentru a construi aplicația folosind webpack sau tsc sau poate ambele în funcție de folderul în care rulați scriptul. Aplicația va construi în două foldere separate `dist`, unul pentru API și una pentru SPA.
- `start`: Un script pentru a porni buildul.

Există și alte scripturi pentru linting, semantic-release etc.

Toate aceste scripturi au fost testate atât pe Windows Powershell, cât și pe GitHub Actions și sunt garantat functonale.