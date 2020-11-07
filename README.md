# pwcho_zad1
# aby zbudować obraz docker bez pobierania kodu należy użyć komendy:
```docker build -t pwcho_zad1:v1 github.com/monia-p/pwcho_zad1```
# uruchomienie kontenera na bazie przygotowanego obrazu
```docker load < pwcho_zad1.tar.gz```
# do uruchomienia obrazu należy użyć komendy:
```docker run -d -p 80:80 --name zadanie1 pwcho_zad1:v1```
# aby pobrać obraz z DockerHub należy wpisać
```docker pull monika98p/pwcho_zad1:latest```
# uruchomienie kontenera odbywa się analogicznie do poprzedniego punktu
```docker run -d -p 80:80 --name zadanie1 monika98p/pwcho_zad1:latest```

