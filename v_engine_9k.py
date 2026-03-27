# KNOCKSSTUDIOS REVENUE & COIN SCRIPT
def onboard_new_operator(user_data):
    # 1. Create the Account
    new_user = EngineDatabase.create(user_data)
    
    # 2. Grant the 2,000 Coin Bonus
    new_user.balance = 2000
    
    # 3. Apply the Gate
    if new_user.tier == "free":
        new_user.render_limit = "5_SECONDS"
        new_user.cost_per_render = 1000 # 2 videos total before they need coins/ads
    else:
        new_user.render_limit = user_data.tier_limit
        new_user.cost_per_render = 0 # Paying subs render free
        
    return "SYNC_COMPLETE: WELCOME TO KNOCKSSTUDIOS"
