import os, colorama
os.system("cls")
mylogs=1196410073568792626
from termcolor import colored
import sqlite3
conn = sqlite3.connect('db.db')
cursor = conn.cursor()
import termcolor
cursor.execute('''
    CREATE TABLE IF NOT EXISTS user_data (
        user_id INTEGER PRIMARY KEY,
        xp INTEGER,
        level INTEGER
    )
''')
conn.commit()
def check(id):
    if id in [990886544208433163,954236007857938472]:
        return True
    return False
configlist = []
colorama.init()
os.system('e:; cd E:/cleaan/.Disbot/')
import discord
from discord.ext import commands

client = commands.Bot(command_prefix='?',intents=discord.Intents.all())

@client.event
async def on_ready():
    os.system("cls")
    await client.change_presence(
        activity=discord.Activity(type=discord.ActivityType.watching, name='NegativeZ.'),
        status=discord.Status.dnd
    )
    print('READY')
    print("")

@client.command()
async def addlevel(ctx, level=1,xp=0,who=0):
    if check(ctx.author.id):
        if who==0:
            who=ctx.author.id
        user_id = who
        cursor.execute('SELECT * FROM user_data WHERE user_id=?', (user_id,))
        user_record = cursor.fetchone()

        if not user_record:
            cursor.execute('INSERT INTO user_data (user_id, xp, level) VALUES (?, 0, 1)', (user_id,))
            conn.commit()

        # Add XP for each message
        cursor.execute('UPDATE user_data SET xp = xp + ?, level = level + ? WHERE user_id=?', (xp,level,user_id))
        conn.commit()
@client.command()
async def setlevel(ctx, level=1,xp=0, who=''):
    if check(ctx.author.id):
        if who=='':
            user_id = ctx.author.id
        cursor.execute('SELECT * FROM user_data WHERE user_id=?', (user_id,))
        user_record = cursor.fetchone()
        if not user_record:
            cursor.execute('INSERT INTO user_data (user_id, xp, level) VALUES (?, 0, 1)', (user_id,))
            conn.commit()

        # Add XP for each message
        cursor.execute('UPDATE user_data SET xp = ?, level = ? WHERE user_id=?', (xp,level,user_id))
        conn.commit()
@client.command()
async def removelevel(ctx, level=0,xp=1,who=''):
    if check(ctx.author.id):
        if who=='':
            user_id = ctx.author.id
        cursor.execute('SELECT * FROM user_data WHERE user_id=?', (user_id,))
        user_record = cursor.fetchone()
        if not user_record:
            cursor.execute('INSERT INTO user_data (user_id, xp, level) VALUES (?, 0, 1)', (user_id,))
            conn.commit()

        # Add XP for each message
        cursor.execute('UPDATE user_data SET xp = xp - ?, level = level - ? WHERE user_id=?', (xp,level,user_id))
        conn.commit()
@client.event
async def on_message(message):
    if message.author.bot:
        return
    user_id = message.author.id
    cursor.execute('SELECT * FROM user_data WHERE user_id=?', (user_id,))
    user_record = cursor.fetchone()

    if not user_record:
        cursor.execute('INSERT INTO user_data (user_id, xp, level) VALUES (?, 0, 1)', (user_id,))
        conn.commit()

    cursor.execute('UPDATE user_data SET xp = xp + 1 WHERE user_id=?', (user_id,))
    conn.commit()

    cursor.execute('SELECT xp, level FROM user_data WHERE user_id=?', (user_id,))
    xp, level = cursor.fetchone()

    if xp >= 10 * level:
        cursor.execute('UPDATE user_data SET xp = 0, level = level + 1 WHERE user_id=?', (user_id,))
        conn.commit()
        await message.channel.send(f'Congratulations {message.author.mention}! You leveled up to level {level + 1}!')

    await client.process_commands(message)

@client.command(aliases=['clevel','cl'])
async def check_level(ctx):
    user_id = ctx.author.id
    cursor.execute('SELECT level FROM user_data WHERE user_id=?', (user_id,))
    result = cursor.fetchone()
    cursor.execute('SELECT xp FROM user_data WHERE user_id=?', (user_id,)) 
    result1 = cursor.fetchone()
    if result:
        level = result[0]
        xp  = result1[0]
        await ctx.send(embed=discord.Embed(
            title='Your Level&Xp',
            description=f'You are currently at level {level} and xp {xp}.'
        ))
    else:
        await ctx.send('You have not earned any XP yet.')

client.run('MTIwMTExODUwMjA5NDkwNTM1NQ.GedTwb.hvldBxLKXGXDFW8TuUL_8G2lG_d9tq652jSdyY')
