#!/usr/bin/python3
"""
V0.1

MIT License

Copyright (c) [2022] [TheProtonDev]
"""
import json
import os


def replace_package_json(new_package: dict):
    with open("package.json", "r+") as json_file:
        json_file.seek(0)
        json_file.truncate(0)
        json.dump(new_package, json_file, indent=2)


def main():
    base_folder = os.path.basename(os.path.dirname(__file__))
    print("MyStack Node Webserver Template Generator\nCopyright (c) [2022] [TheProtonDev]\n")
    project_name = input(f"Project Name (If left blank will default to current folder: "
                         f"{base_folder})\n> ")
    if project_name != "":
        # Create and CD into project folder if folder wasn't already created for this project
        os.mkdir(project_name)
        os.chdir(project_name)

    author_name = input(f"Your name:\n> ") or ""

    package_json = {
        "name": f"{project_name.lower().replace(' ', '-')}",
        "version": "0.0.1",
        "type": "module",
        "description": "",
        "main": "pages/index.html",
        "scripts": {
            "startserver": "node server.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": f"{author_name}",
        "license": "MIT",
        "dependencies": {}
    }

    print("Generating Project...")
    print("1. Cloning Repository...")
    os.system("git clone https://github.com/TheProtonDev/mystack-node-webserver-template.git ./")
    print("Updating package.json with project name and author")
    replace_package_json(package_json)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nKeyboardInterrupt Detected. Aborting Operation.")
