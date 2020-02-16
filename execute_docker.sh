#!/bin/bash
echo "Hello World"
sudo docker build . -t run_cpp
sudo docker run -i run_cpp > out.txt
