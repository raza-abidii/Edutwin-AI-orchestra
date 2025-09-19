import json

class PlannerAgent:
    def generate_study_plan(self, topics):
        study_plan = {}
        days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        
        for i, topic in enumerate(topics):
            day = days[i % len(days)]
            if day not in study_plan:
                study_plan[day] = []
            study_plan[day].append(topic)
        
        return json.dumps(study_plan, indent=4)