'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let activeIndex = 1;
    await ctx.render('index',{
    	activeIndex: activeIndex
    });
  }

  async about() {
    const { ctx } = this;
    let activeIndex = 2;
    await ctx.render('about',{
    	activeIndex: activeIndex
    });
  }

  async product() {
    const { ctx } = this;
    let activeIndex = 3;
    await ctx.render('product',{
    	activeIndex: activeIndex
    });
  }  

  async contact() {
    const { ctx } = this;
    let activeIndex = 4;
    await ctx.render('contact',{
      activeIndex: activeIndex
    });
  } 

}

module.exports = HomeController;
