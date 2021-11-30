
def createMessage():
    mensagem = input('Digite sua mensagem ');
    print(mensagem);

import random;

def guess_number():
    random_number = random.randint(1, 10)
    guess = ""

    while guess != random_number:
        guess = int(input("Qual o seu palpite? "))
    
    print("O número sorteado era: ", guess)


def name_write():
    name = input('Qual o seu nome? ');
    for carac in name:
        print(carac)


def sum_numbers(*numbers):
    sum = 0
    for num in numbers:
        if type(num) == "int":
            print('Entrei')
        else:
            f"Erro ao somar valores, {sum} é um valor inválido"
    print(sum)


sum_numbers(10, 20, 30, 40, 50)