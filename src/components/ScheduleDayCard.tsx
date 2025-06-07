
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Clock, MapPin, FileText, MessageSquare } from 'lucide-react';

interface ScheduleActivity {
  time: string;
  venue: string;
  activity: string;
  remarks: string;
}

interface ScheduleDay {
  day: number;
  date: string;
  title: string;
  activities: ScheduleActivity[];
}

interface ScheduleDayCardProps {
  day: ScheduleDay;
}

const ScheduleDayCard = ({ day }: ScheduleDayCardProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full"
    >
      <Card className="border border-neon-cyan/20 bg-black/80 backdrop-blur-sm hover:border-neon-cyan/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
        <CardHeader className="text-center pb-6">
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta mb-4 text-black font-bold text-2xl">
              {day.day}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardTitle className="text-2xl md:text-3xl font-mono text-white mb-2">
              Day {day.day}
            </CardTitle>
            <p className="text-neon-cyan font-mono text-lg">{day.date}</p>
            <p className="text-gray-300 text-xl mt-2">{day.title}</p>
          </motion.div>
        </CardHeader>
        
        <CardContent>
          <motion.div variants={itemVariants} className="overflow-hidden rounded-lg border border-white/10">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-white/10 hover:bg-white/5">
                  <TableHead className="text-neon-cyan font-mono font-bold flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Time
                  </TableHead>
                  <TableHead className="text-neon-cyan font-mono font-bold">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Venue
                    </div>
                  </TableHead>
                  <TableHead className="text-neon-cyan font-mono font-bold">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Activity
                    </div>
                  </TableHead>
                  <TableHead className="text-neon-cyan font-mono font-bold">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Remarks
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {day.activities.map((activity, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <TableCell className="font-mono text-white font-medium">
                      {activity.time}
                    </TableCell>
                    <TableCell className="font-mono text-neon-magenta font-medium">
                      {activity.venue}
                    </TableCell>
                    <TableCell className="text-gray-200 max-w-xs">
                      <div className="space-y-1">
                        {activity.activity.includes('•') ? (
                          <div>
                            {activity.activity.split('•').map((item, i) => (
                              <div key={i} className={i === 0 ? 'font-medium text-white mb-2' : 'text-sm text-gray-300 ml-4'}>
                                {i === 0 ? item : `• ${item.trim()}`}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="font-medium text-white">{activity.activity}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-400 text-sm max-w-xs">
                      {activity.remarks}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ScheduleDayCard;
