# Podsumowanie zdarzeń &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` potem z kolejnymi numerami zadań, wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**

## Zadanie rozwiązywane z wykładowcą

### Przyciski (~ 10min)

Stwórz komponent z 3 przyciskami z napisem "Klik!".

Po kliknięciu na pierwszy przycisk wyświetl w konsoli "Pierwszy przycisk kliknięty".

Po kliknięciu na drugi przycisk zmień tekst, który znajduje się na przyciskach na "Click!".

Po kliknięciu na trzeci przycisk zmień szerokość trzeciego przycisku na 300px.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 10min)
#### Włączanie i wyłączenie żarówki

Stwórz komponent `Bulb` z elementem `div` z kolorem tła ustawionym na biały, szerokością i wysokością 100px. W elemencie `div` umieść przycisk `button` z napisem "On".

Kliknięcie na przycisk zmienia stan żarówki: jeżeli tło `div` było białe, to zmienia je na żółte, a napis na przycisku na "Off". W przeciwnym wypadku zmienia tło na białe, a napis na "On".

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 2 (~ 10min)
#### Najeżdżanie i zjeżdżanie

Stwórz komponent z elementem `div` z kolorem tła ustawionym na zielony, szerokością 500px i wysokością 200px.

Po najechaniu na `div` ma się zmieniać jego tło na niebieskie, a wysokość na 400px.

Gdy kursor odjedzie, komponent ma wrócić do pierwotnego **stanu**.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**


### Zadanie 3 (~ 10min)
#### Uciekający div

Stwórz komponent `CrazyDiv`. Ma on mieć czerwone tło, wysokość i szerokość 100px oraz `position` ustawione na `absolute`.

Po każdym najechaniu na `div` ma się zmieniać jego styl `left` i `top` na dwie losowe wartości z przedziału 0 - 1000px.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 4 (~ 10min - 15min)
#### Pokazywanie/Ukrywanie elementów

Stwórz komponent `MobileMenu`.

Komponent ma mieć następującą strukturę:
```HTML
<menu>
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Otwórz menu">
    </div>
    <div>
        <ul>
            <li>Menu 1...</li>
            <li>Menu 2...</li>
            <li>Menu 3...</li>
            <li>Menu 4...</li>
        </ul>
        <div>Schowaj menu</div>
    </div>
</menu>
```

Na początku powinien być widoczny tylko pierwszy div, drugi ma być schowany.

Po kliknięciu na ikonę menu, powinien się schować pierwszy div, a pokazać drugi.

Po kliknięciu na "Schowaj menu" znów powinien być widoczny tylko pierwszy div, a drugi ma się schować.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

PS. <https://lmjabreu.com/post/why-and-how-to-avoid-hamburger-menus/>


### Zadanie 5 (~ 25min - 35min)
#### Mini gra w klikanie

> Poniższe zadanie pozwoli stworzyć Ci minigrę, w której gracz ma określony czas by jak najszybciej klikać na przycisk. Czas biegnie coraz szybciej i należy kliknąć tyle razy ile uda się zanim czasu między kolejnymi kliknięciami będzie za mało.

Stwórz komponent `SpeedClickGame`. Ma on przyjmować czas do odliczania w ms przez props `time` i przechowywać go w stanie lokalnym.

Komponent składa się z przycisku z napisem "Click me!", elementu `h1` i elementu `h2` w elemencie `div`. W elemencie `h1` wyświetlaj aktualny czas, w `h2` będzie przechowywana liczba punktów (póki co 0).

Uruchom interval lub timer wykonywany co 50ms. **Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.** W funkcji timera / intervala zmniejszaj aktualny czas o 50ms i sprawdzaj czy czas się nie skończył. Jeżeli czas się skończył to zablokuj przycisk (`disabled={true}`).

Po kliknięciu na przycisk dodawany jest punkt, a czas zostaje zresetowany, ale jest o 50ms krótszy niż poprzedni.

Np. jeżeli atrybut `time` tego komponentu był ustawiony na 1000 to:
- Brak kliknięć, czas początkowy: 1000ms,
- Pierwsze kliknięcie, czas początkowy: 950ms,
- Drugie kliknięcie, czas początkowy: 900ms,
- Trzecie kliknięcie, czas początkowy: 850ms...

Wyrenderuj dla `time` ustawionego na 2000 i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 6 (~ 20min - 25min)
#### Gra matematyczna

> To zadanie pozwoli Ci stworzyć prostą grę matematyczną.
> Będzie Ci potrzebne kilka rzeczy w celu wykonania zadania.
> Losowanie dowolnego elementu z tablicy:
> ```JavaScript
> items[Math.floor(Math.random()*items.length)]
> ```
>
> Losowanie losowej liczby całkowitej z przedziału:
> ```JavaScript
> Math.floor(Math.random() * (max - min) + min )
> ```
> 
> Funkcja do losowego układania kolejności w tablicy (shuffle):
> ```JavaScript
> function shuffle(a) {
>     for (let i = a.length; i; i--) {
>         let j = Math.floor(Math.random() * i);
>         [a[i - 1], a[j]] = [a[j], a[i - 1]];
>     }
> }
> ```
> Użycie: przekazujesz tablicę, zostanie ona zmodyfikowana - elementy będą w losowych miejscach.


Stwórz komponent `MathQuestionGame`.

Na początku wylosuj jedno z działań: **dodawanie, odejmowanie lub mnożenie**. Wylosuj również **dwie liczby całkowite z przedziału 1-10**. Wykonaj wylosowane działanie matematyczne pomiędzy dwoma wylosowanymi liczbami, przechowaj wynik.

Wygeneruj 4 przyciski, w tym 3 z losowymi liczbami **innymi niż poprawny wynik** (możesz użyć np. pętli while by upewnić się, że wysolowany nie zostanie poprawny wynik) oraz 1 przycisk z poprawną odpowiedzią. Przyciski przechowuj w formie tablicy, którą następnie przetasujesz (zob. wyżej funkcję shuffle) i wyrenderujesz w komponencie.

Gra wyświetlać się ma w takiej strukturze (przykład):
```HTML
<div>
    <h1>2 * 3 =</h1>
    <div>
        <button>3</button>
        <button>6</button>
        <button>8</button>
        <button>7</button>
    </div>
    <h2>00:08</h2>
</div>
```

Gracz ma mieć 10 sekund na udzielenie prawidłowej odpowiedzi. Uruchom timer / interval. **Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**

Zasady:
- Po kliknięciu na prawidłowy przycisk element `h1` zamieni napis na "Gratulacje!";
- Po kliknięciu na nieprawidłowy przycisk element `h1` zamieni napis na "Błędna odpowiedź :(";
- Po minięciu czasu zanim zostanie kliknięty jakiś przycisk element `h1` zamieni napis na "Czas minął!", zabezpiecz też, żeby nie można było klikać przycisków po czasie.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**
