// 1. jak zrobić to składanie zamówienia, etapy zakupu:

//     - logowanie
//     - zbieranie informacji o adresie wysyłki
//     - wybór metody płatności
//     - podsumowanie i potwierdzenie zamówienia


// 2. Chyba najpierw lepszą sprawą będzie ogarnąć pulpit użytkownika,
//     - dane użytkownika jak uzupełnione to można składać zamówienia
//         > adres wysyłki 
//         > imię i nazwisko 
//         > email 
//         > preferowana metoda płatności
//         > telefon 
//     - historia zamówień ( skoro ma być zapisywana lokalnie to użyję redux-presist ) 
//         automatyczna persystencja
//     - ustawienia motywu 

//     ----------------------------------------------------------------------------- 

//     ok. widok mobilny zrobiony, teraz czas zrobić zamówienia, wybieram produkty i 
//     klikam PROCEED TO CHECKOUT po kliknięciu:

//     - trzeba sprawdzić, czy istnieją dane użytkownika w localStorage, jeśli tak to:
//         > wyświetlamy formatkę z danymi i klikamy dodaj zamówienie, pojawia się

//         > nowy widok z podsumowaniem jakie produkty cena adres nr konta bankowego
//          do wpłaty nr zamówienia, status-> oczekuje na wpłatę, czy zamówienie jest 
//          przygotowywane do wysyłki, 
//          > zrobić jeszcze wybór metody płatności bo jest wymagany
//          > podsumowanie zamówienia,
//          > potwierdzenie zamówienia,
//          > czyli nie będzie zamówienia tylko historia zamówień

//     - jeśli nie ma danych użytkownika to przekierowujemy na Dashboard w celu ich 
//         utworzenia, 


//     * dane o produktach mam w stanie products
//     * dane o użytkowniku mam w stanie user
//     * jakie dane potrzebuję do wysyłki? -> adres, imię i nazwisko, telefon -> to muszę zwalidować


//      todo komponent działa trzeba: 
//      dodać zabezpieczenie jak brakuje produktów,
//      i napisać go jeszcze raz, żeby wiedzieć co się tam dzieje i podzielić na mniejsze komponenty
//     
//*     pobrać i wyświetlić dane o użytkowniku
//*     pobrać i wyświetlić produkty z koszyka 
//*     utworzyć listę wyboru z opcjami do zapłaty
//*     przycisk do potwierdzenia zamówienia
//*     okienko dialog do zatwierdzenia zamówienia lub jego anulowania















    

//     -----------------------------------------------------------------------------

//     plan na kolejne dni to: 
//     - poprawić backend i zapytania do bazy danych, które będą aktualizowały 
//         dane o użytkowniku z dashboardu,
//     - jak utworzyć wysyłanie maila z backendu

//     -----------------------------------------------------------------------------

//     - przemyśleć jak zrealizować dodanie zamówienia, 
//         > czy dodanie do bazy danych,
//         > czy może localnie
//         > po kolei przejścia przez wszystkie etapy
//             >> produkty
//             >> informacje do wysyłki
//             >> informacje jak płacić
//             >> potwierdzenie zamówienia



    
    

    // --------------------------------------------------------------------------------



