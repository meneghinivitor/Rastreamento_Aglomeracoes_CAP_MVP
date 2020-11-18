import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native';

// Importar getNews do ficheiro news.js
import {getNews} from './news';
import Article from './article';

export default class Noticia extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: [], refreshing: true};
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then((articles) => this.setState({articles, refreshing: false}))
      .catch(() => this.setState({refreshing: false}));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true,
      },
      () => this.fetchNews(),
    );
  }

  render() {
    return (
      <View style={styles.container}>
      <FlatList
        data={this.state.articles}
        renderItem={({item}) => <Article article={item} />}
        keyExtractor={(item) => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});