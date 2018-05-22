FROM docker.elastic.co/elasticsearch/elasticsearch:6.2.3

RUN echo 'http.cors.enabled: true' >> config/elasticsearch.yml
RUN echo 'http.cors.allow-origin: /https?:\/\/localhost(:[0-9]+)?/' >> config/elasticsearch.yml
