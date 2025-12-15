import cron from 'node-cron';
import { generate5Blogs } from './blogGenerator';
import type { IStorage } from '../storage';

let isCronRunning = false;

export function startBlogCron(storage: IStorage) {
  if (isCronRunning) {
    console.log('⚠️  Blog cron job is already running');
    return;
  }

  console.log('🔄 Initializing automatic blog generation cron job...');
  console.log('📅 Schedule: Daily at 7:30 AM (Panama time / GMT-5)');
  
  cron.schedule('30 7 * * *', async () => {
    try {
      console.log('\n🤖 Starting automatic blog generation...');
      console.log(`🕐 Time: ${new Date().toLocaleString('es-PA', { timeZone: 'America/Panama' })}`);
      
      const blogs = await generate5Blogs();
      const createdBlogs = [];
      
      for (const blog of blogs) {
        const created = await storage.createBlog(blog);
        createdBlogs.push(created);
      }
      
      console.log(`✅ Successfully generated ${createdBlogs.length} blogs automatically`);
      console.log('📝 Blog titles:');
      createdBlogs.forEach((blog, index) => {
        console.log(`   ${index + 1}. ${blog.title}`);
      });
      
    } catch (error) {
      console.error('❌ Error in automatic blog generation:', error);
    }
  }, {
    timezone: 'America/Panama'
  });

  isCronRunning = true;
  console.log('✅ Blog cron job started successfully\n');
}

export function manualGenerateBatch(storage: IStorage) {
  console.log('\n🤖 Manual batch generation triggered...');
  
  generate5Blogs()
    .then(async (blogs) => {
      const createdBlogs = [];
      
      for (const blog of blogs) {
        const created = await storage.createBlog(blog);
        createdBlogs.push(created);
      }
      
      console.log(`✅ Successfully generated ${createdBlogs.length} blogs manually`);
      createdBlogs.forEach((blog, index) => {
        console.log(`   ${index + 1}. ${blog.title}`);
      });
    })
    .catch((error) => {
      console.error('❌ Error in manual blog generation:', error);
    });
}
