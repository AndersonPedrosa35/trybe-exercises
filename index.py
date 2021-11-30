
def createMessage():
    mensagem = input('Digite sua mensagem ');
    print(mensagem);

import random;

def guessNumber():
    random_number = random.randint(1, 10)
    guess = ""

    while guess != random_number:
        guess = int(input("Qual o seu palpite? "))
    
    print("O número sorteado era: ", guess)

guessNumber();