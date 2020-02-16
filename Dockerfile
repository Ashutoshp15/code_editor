FROM ubuntu:18.04
WORKDIR /code_editor
RUN apt-get update
RUN apt-get install g++ -y
COPY Output.cpp .
ENTRYPOINT g++ Output.cpp
CMD ./a.out
