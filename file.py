import json
from os import wait

def writeFileTeste(file_name, write):
    file = open(file_name, mode='w');

    # user_write = input('Escreva sua mensagem ')
    file.writelines(write)
    file.close();
    return ""

def readFile(file_name):
    file = open(file_name, mode='r');
    content_file = file.read();
    content_file = content_file.split();
    file.close();
    # object_file = dict()
    # for index, people in enumerate(content_file):
    #     if index < len(content_file) - 1 and len(content_file[index + 1]) < 3:
    #         object_file[people] = int(content_file[index + 1])
    return content_file;


def read_and_write_json(file_json):
    with open(file_json) as file:
        pokemons = json.load(file)
        return pokemons

if __name__ == "__main__":
    file = read_and_write_json('pokemon.json')
    print(file);
        